import cn from './Button.module.scss';
import { motion } from 'framer-motion';

export const Button = ({
     label,
     icon,
     size,
     disabled,
     type = 'Primary',
     onClick,
     loading,
     fullWidth = false,
     className,
}) => {
     const buttonClasses = [
          className,
          cn.button,
          size === 'large' && cn['button--large'],
          disabled && cn['button--disabled'],
          type === 'Primary' ? cn['button--primary'] : cn['button--secondary'],
     ]
          .filter(Boolean)
          .join(' ');

     return (
          <motion.button
               whileTap={{ scale: 0.95 }}
               animate={{}}
               className={buttonClasses}
               // onClick={!disabled ? onClick : undefined}
               onClick={onClick}
               disabled={disabled}
               style={{
                    width: fullWidth && '100%',
               }}
          >
               {icon && <span className={cn['button__icon']}>{icon}</span>}
               {loading && (
                    <svg
                         width="24"
                         height="24"
                         viewBox="0 0 24 24"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                    >
                         <circle
                              opacity="0.5"
                              cx="12"
                              cy="12"
                              r="9"
                              // stroke={white}
                              stroke-width="2"
                         />
                         <path
                              d="M12 21C7.02944 21 3 16.9706 3 12"
                              // stroke={white}
                              stroke-width="2"
                         />
                    </svg>
               )}
               {!loading ? label : null}
          </motion.button>
     );
};
