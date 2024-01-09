import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  promocode: string;
  discount: number;
}

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onBlur",
    reValidateMode: "onChange",
    criteriaMode: "firstError",
  });

  const [discountData, setDiscountData] = useState<FormData[]>([]);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setDiscountData([...discountData, data]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Промокод:
          <input
            type="text"
            {...register("promocode", {
              required: "Промокод обязателен",
              maxLength: {
                value: 10,
                message: "Промокод должен быть не длиннее 10 символов",
              },
            })}
          />
        </label>
        {errors.promocode && <p>{errors.promocode.message}</p>}

        <label>
          Процент скидки:
          <input
            type="number"
            {...register("discount", {
              required: "Процент скидки обязателен",
              min: {
                value: 0,
                message: "Скидка не может быть меньше 0%",
              },
              max: {
                value: 100,
                message: "Скидка не может быть больше 100%",
              },
            })}
          />
        </label>
        {errors.discount && <p>{errors.discount.message}</p>}

        <button type="submit" disabled={!isValid}>
          Отправить
        </button>
      </form>

      <div>
        <h2>Введенные данные:</h2>
        <ul>
          {discountData.map((data, index) => (
            <li key={index}>
              Промокод: {data.promocode}, Скидка: {data.discount}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Form;
