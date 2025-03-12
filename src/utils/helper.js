import slugify from "slugify";

export function slugifyWithOpts(name) {
  return slugify(name, { lower: true, remove: /[^\w\s-]/g, locale: "ru" });
}

export function validateForm(values) {
  if (values.name.length <= 2) {
    return false;
  }

  if (values.phone.length !== 19) {
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(values.email)) {
    return false;
  }

  return true;
}

export function searchByModelName(carModels, modelName) {
  for (let brandObj of carModels) {
    const foundModel = brandObj.models.find(
      (model) => slugifyWithOpts(model.title) === modelName
    );

    if (foundModel) {
      return foundModel;
    }
  }
  return undefined;
}

export function checkOrderFields(FirstName, phone, LastName, email) {
  if (FirstName.length < 2) {
    return false;
  }
  if (phone.length !== 19) {
    return false;
  }
  if (LastName.length < 2) {
    return false;
  }

  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!regex.test(email)) {
    return false;
  }
  return true;
}
