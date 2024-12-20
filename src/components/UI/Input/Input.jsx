import { Controller } from 'react-hook-form';
import { useState } from 'react';
import cn from './Input.module.scss';

const countryFlags = {
	'+1': '/flags/united-states-of-america.svg',
	'+7': '/flags/russian-federation.svg',
}

const Input = ({
     label,
     name,
     control,
     errors,
     errorText,
     type = 'text',
     required = false,
     disabled,
     placeholder,
}) => {
     const [flagUrl, setFlagUrl] = useState(countryFlags['+7']);

     const detectFlag = (value) => {
          const prefix = Object.keys(countryFlags).find((code) =>
               value.startsWith(code)
          );
          setFlagUrl(prefix ? countryFlags[prefix] : flagUrl);
     };

     return (
          <label className={cn['modal__label']}>
               <p>
                    {label}
                    {required && (
                         <span className={cn['modal__required']}>*</span>
                    )}
                    :
               </p>

               <Controller
                    name={name}
                    control={control}
                    defaultValue=""
                    rules={
                         name !== 'company' && name !== 'website'
                              ? {
                                     required: `This field is required.`,
                                     pattern: {
                                          value:
                                               type === 'email'
                                                    ? /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
                                                    : undefined,
                                     },
                                }
                              : undefined
                    }
                    render={({ field: { value, onChange, ...field } }) => (
                         <label className={cn['modal__input-container']}>
                              {name === 'phone' && (
                                   <img
                                        src={flagUrl}
                                        alt="Country flag"
                                        className={cn['modal__flag']}
                                   />
                              )}
                              <input
                                   {...field}
                                   value={value}
                                   onChange={(e) => {
                                        onChange(e);
                                        if (name === 'phone') {
                                             detectFlag(e.target.value);
                                        }
                                   }}
                                   type={type}
                                   className={`${cn['modal__input']} ${
                                        errors[name]
                                             ? cn['modal__input--error']
                                             : ''
                                   }`}
                                   placeholder={placeholder}
                              />
                         </label>
                    )}
               />

               {errorText && errors[name] && (
                    <span className={cn['modal__error']}>
                         {errors[name]?.message}
                    </span>
               )}
          </label>
     );
};

export default Input;
