"use client";
import clsx from "clsx";
import styles from "./SearchInput.module.scss";
import MainButton from "@/components/Buttons/MainButton/MainButton";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";

import Fuse from "fuse.js";
import api from "@/http";
import { slugifyWithOpts } from "@/utils/helper";

const test = [
  {
    url: "/catalog/silovie",
    img: `data:image/png;base64,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`,
    title: "Силовые кабели",
    text: "Группа товаров",
  },
  {
    url: "/catalog/silovie",
    img: `data:image/png;base64,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`,
    title: "Силовые кабели",
    text: "Группа товаров",
  },
  {
    url: "/catalog/silovie",
    img: `data:image/png;base64,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`,
    title: "Силовые кабели",
    text: "Группа товаров",
  },
  {
    url: "/catalog/silovie",
    img: `data:image/png;base64,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`,
    title: "Силовые кабели",
    text: "Группа товаров",
  },
  {
    url: "/catalog/silovie",
    img: `data:image/png;base64,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`,
    title: "Силовые кабели",
    text: "Группа товаров",
  },
  {
    url: "/catalog/silovie",
    img: `data:image/png;base64,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`,
    title: "Силовые кабели",
    text: "Группа товаров",
  },
  {
    url: "/catalog/silovie",
    img: `data:image/png;base64,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`,
    title: "Силовые кабели",
    text: "Группа товаров",
  },
  {
    url: "/catalog/silovie",
    img: `data:image/png;base64,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`,
    title: "Силовые кабели",
    text: "Группа товаров",
  },
];

const globalSearchOptions = {
  keys: [
    { name: "category", weight: 0.1 },
    { name: "productTitle", weight: 1.0 },
  ],
  includeScore: true,
};

const SearchInput = ({ name, placeholder, disabled, className, ...other }) => {
  const [value, setValue] = useState("");
  const [isResult, setResult] = useState(false);
  const [isActive, setActive] = useState(false);
  const [error, setError] = useState(false);
  const [searchData, setData] = useState([]);
  const ref = useRef(null);
  /*  const fuse = useMemo(
    () => new Fuse(searchData, globalSearchOptions),
    [searchData]
  ); */

  useOutsideClick(ref, () => {
    setResult(false);
  });

  const onChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      /*   try {
        let res = await api.get("/catalog/categories", {
          next: { revalidate: 600 },
        });
        const { data } = res;
        const categories = [];
        data.forEach((elem) => {
          categories.push(...elem.children);
        });

        const parentCats = [...data.filter((elem) => elem.parent_id == null)];
        res = await api.get("/catalog/products", {
          next: { revalidate: 600 },
        });
        const { data: subData } = res;
        const products = subData;
        const sData = [
          ...parentCats.map((elem) => ({
            type: "parent",
            category: elem.name,
            slug: slugifyWithOpts(elem.name) || "/",
          })),
          ...categories.map((elem) => ({
            type: "category",
            category: elem.name,
            parentCategory: parentCats.find((parent) =>
              parent.children.find((child) => child.id === elem.id)
            ),
            slug: slugifyWithOpts(elem.name) || "/",
          })),
          ...products.map((elem) => ({
            type: "product",
            id: elem.id,
            category: elem.category,
            parentCategory: parentCats.find((parent) =>
              parent.children.find((child) => child.id === elem.category.id)
            ),
            productTitle: elem.name,
            image: elem.photo,
            slug: slugifyWithOpts(elem.name),
          })),
        ];

        setData(sData);
      } catch (error) {
        console.log(error);
      } */
      setData(test);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (value.trim().length === 0) {
      setResult(false);
      return;
    }
    const timeout = setTimeout(() => {
      /* const result = fuse.search(value).slice(0, 10); */
      const result = searchData.filter((elem) => elem.title.includes(value));
      setResult(result);
    }, 300);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className={clsx(styles.wrapper, { [styles.error]: error }, className)}>
      <label
        ref={ref}
        className={clsx("h2", styles.container, {
          [styles.active]: value.length > 0 || isActive,
        })}
      >
        <input
          className={clsx("h2", styles.field)}
          type="text"
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={onChange}
          {...other}
        />

        <svg
          width="86"
          height="86"
          viewBox="0 0 86 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.search}
        >
          <g clipPath="url(#clip0_168_5604)">
            <mask
              id="mask0_168_5604"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="86"
              height="86"
            >
              <path d="M86 0H0V86H86V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_168_5604)">
              <path
                d="M37.6256 60.9163C50.4893 60.9163 60.9173 50.4883 60.9173 37.6247C60.9173 24.761 50.4893 14.333 37.6256 14.333C24.762 14.333 14.334 24.761 14.334 37.6247C14.334 50.4883 24.762 60.9163 37.6256 60.9163Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M70.401 72.9332C71.1009 73.6327 72.2353 73.6327 72.9352 72.9332C73.6346 72.2334 73.6346 71.0989 72.9352 70.3991L70.401 72.9332ZM72.9352 70.3991L55.0185 52.4824L52.4844 55.0166L70.401 72.9332L72.9352 70.3991Z"
                fill="currentColor"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_168_5604">
              <rect width="86" height="86" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <div className={styles.bg}>
          <div
            className={clsx(styles.resWrapper, { [styles.active]: isResult })}
          >
            <div className={styles.results}>
              <div className={styles.items}>
                {isResult &&
                  isResult.map((elem, index) => (
                    <Link
                      key={index}
                      onClick={() => {
                        setResult(false);
                      }}
                      href={elem.url}
                      className={clsx(styles.item)}
                    >
                      <Image
                        src={elem.img}
                        alt={elem.img}
                        width={64}
                        height={64}
                        className={styles.image}
                      />

                      <div className={styles.caption}>
                        <div className={clsx("body-3", styles.title)}>
                          {elem.title}
                        </div>
                        <div className={clsx("body-4", styles.text)}>
                          Арт. 1111111
                        </div>
                      </div>
                      <div className={styles.controls}>
                        <div className={clsx("body-1", styles.price)}>
                          126 BYN
                        </div>
                        <div className={clsx("body-4", styles.discount)}>
                          130 BYN
                        </div>
                        <MainButton href={elem.url} className={styles.buy}>
                          Купить
                        </MainButton>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {error && (
          <div className={clsx("body-5", styles.message)}>
            * Ничего не найдено
          </div>
        )}
      </label>
    </div>
  );
};

export default SearchInput;
