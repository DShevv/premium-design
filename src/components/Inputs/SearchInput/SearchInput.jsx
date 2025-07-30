"use client";
import clsx from "clsx";
import styles from "./SearchInput.module.scss";
import MainButton from "@/components/Buttons/MainButton/MainButton";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import image1 from "@/assets/images/news.png";
import image2 from "@/assets/images/rebuild-complect.png";
import image3 from "@/assets/images/rebuild-head.jpg";
import image4 from "@/assets/images/works-1.png";
import Fuse from "fuse.js";
import api from "@/http";
import { slugifyWithOpts } from "@/utils/helper";

const globalSearchOptions = {
  keys: [
    { name: "category", weight: 0.1 },
    { name: "productTitle", weight: 1.0 },
  ],
  includeScore: true,
};

const SearchInput = ({
  name,
  placeholder,
  disabled,
  className,
  setResults,
  ...other
}) => {
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
      try {
        const posts = await fetch(`${process.env.API_URL}/v1/portfolio`, {
          next: { revalidate: 60 },
        })
          .then((res) => res.json())
          .catch((err) => undefined);
        const services = await fetch(
          `${process.env.API_URL}/v1/additional-services`,
          {
            next: { revalidate: 60 },
          }
        )
          .then((res) => res.json())
          .catch((err) => undefined);

        const parsedSearch = [
          {
            title: "Услуги",
            url: `/services`,
            image: image1,
          },
          {
            title: "Портфолио",
            url: `/portfolio`,
            image: image2,
          },
          {
            title: "О компаннии",
            url: `/about`,
            image: image3,
          },
          {
            title: "Контакты",
            url: `/contacts`,
            image: image4,
          },
          {
            title: "Дизайн проект",
            url: `/services/design-project`,
            image: image1,
          },
          {
            title: "Дизайн проект с комплектацией",
            url: `/services/design-complect`,
            image: image2,
          },
          {
            title: "Ремонт под ключ (с дизайн проектом заказчика)",
            url: `/services/rebuild-project`,
            image: image3,
          },
          {
            title:
              "Ремонт под ключ с комплектацией (с дизайн проектом заказчика)",
            url: `/services/rebuild-complect`,
            image: image4,
          },
          ...services.map((elem) => ({
            title: elem.title,
            url: `/services/${slugifyWithOpts(elem.title)}_${elem.id}`,
            photo_path: elem.photo_path,
          })),
          ...posts.data.map((elem) => ({
            title: elem.title,
            url: `/portfolio/${slugifyWithOpts(elem.title)}_${elem.id}`,
            photo_path: elem.photo_path,
          })),
        ];

        setData(parsedSearch);
      } catch (error) {
        console.log(error);
      }
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

      const result = searchData.filter((elem) =>
        elem.title.toLowerCase().includes(value.toLowerCase())
      );
      setResult(result);
    }, 300);

    return () => clearTimeout(timeout);
  }, [value]);

  useEffect(() => {
    setResults(isResult);
  }, [isResult]);

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
