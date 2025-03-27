export function validateFeedBack(values) {
  const errors = {};

  if (!values.name) {
    errors.name = "Введите имя";
  } else if (values.name.length < 1) {
    errors.name = "Слишком короткое имя";
  }

  if (!values.phone) {
    errors.phone = "Введите номер телефона";
  } else if (values.phone.length < 11) {
    errors.phone = "Слишком короткий номер";
  } else if (values.phone.length > 19) {
    errors.phone = "Слишком длинный номер";
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!emailRegex.test(values.email)) {
    errors.email = "Неверный Email";
  }

  return errors;
}
