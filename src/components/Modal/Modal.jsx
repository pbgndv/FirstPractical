import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import cn from './Modal.module.scss';
import { Button, Link, Input} from '../index';
import { motion } from 'framer-motion';




export const Modal = ({ isOpen = false, onClose }) => {
     const {
          control,
          handleSubmit,
          formState: { errors },
     } = useForm();

     const onSubmit = (data) => {
          console.log('Данные:', data);
          onClose();
     };

     const handleKeyDown = (e) => {
          if (e.key === 'Escape') onClose();
     };

     useEffect(() => {
          if (isOpen) {
               document.addEventListener('keydown', handleKeyDown);
               return () =>
                    document.removeEventListener('keydown', handleKeyDown);
          }
     }, [isOpen]);

     const formClasses = [
          cn['modal__form'],
          Object.keys(errors).length > 0 && cn['has-errors'],
     ]
          .filter(Boolean)
          .join(' ');

     if (!isOpen) return null;

     return (
          <div className={cn['modal']} aria-hidden={!isOpen}>
               <div
                    className={cn['modal__content']}
                    onClick={(e) => e.stopPropagation()}
               >
                    <button
                         onClick={onClose}
                         className={cn['modal__close']}
                         aria-label="Закрыть модальное окно"
                    >
                         ×
                    </button>
                    <form
                         className={formClasses}
                         onSubmit={handleSubmit(onSubmit)}
                    >
                         <Input
                              label="Name"
                              name="name"
                              placeholder="Enter name"
                              control={control}
                              errors={errors}
                              errorText
                              disabled
                              required
                         />
                         <Input
                              label="Email"
                              name="email"
                              placeholder="Enter email"
                              control={control}
                              errors={errors}
                              type="email"
                              errorText
                              required
                         />

                         <Input
                              label="Phone number"
                              name="phone"
                              placeholder="+7 (000)_000_00_00"
                              control={control}
                              errors={errors}
                              required
                         />

                         <Input
                              label="Company"
                              name="company"
                              placeholder="Enter company"
                              control={control}
                              errors={errors}
                         />
                         <Input
                              label="Website/Store URL"
                              name="website"
                              placeholder="Enter Website/Store URL"
                              control={control}
                              errors={errors}
                              type="url"
                         />

                         {errors && (
                              <p className={cn['modal__error-description']}>
                                   Please fill in all required fields
                              </p>
                         )}

                         <span className={cn['modal__description']}>
                              By submitting this form you are agreeing to
                              Budss’s{' '}
                              <Link href={'/#policy'}>Privacy Policy</Link> and{' '}
                              <Link href={'/#terms'}>Terms of Use</Link>
                         </span>

                         <Button
                              onClick={onSubmit}
                              label="Contact sales"
                              type="Primary"
                              disabled={Object.keys(errors).length > 0}
                              fullWidth
                         />
                    </form>
               </div>
          </div>
     );
};
