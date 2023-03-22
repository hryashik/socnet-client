import { ILoginRequest } from "../../api/contracts";

export interface IFormInput extends ILoginRequest {}

export enum ERROR_NAMES {
  REQUIRED = 'Поле обязательно для заполнения',
  INCORRECT_FORMAT_EMAIL = 'Неверный формат email',
  MIN_LENGTH_EMAIL = 'Минимум 6 символов',
  MIN_LENGTH_PASSWORD = 'Минимум 6 символов',
  MAX_LENGTH_EMAIL = "Максимальная длина email 25 символов",
  MAX_LENGTH_PASSWORD = "Максимальная длина пароля 15 символов",
  INCORRECT_CREDENTIALS = 'Введённые данные некорректны'
}
