import { useContext } from 'react';
import { motion } from 'framer-motion';
import Image from '../Image';
import cn from './Header.module.scss';
import { Button } from '../index';
import { ModalContext } from '../../contexts/ModalContext';

const Header = () => {
     const { setModalIsOpen } = useContext(ModalContext);

     return (
          <header className={cn.header}>
               <motion.div
                    initial={{ opacity: 0 }}
                    transition={{
                         delay: 0.25,
                         type: 'spring',
                         damping: 30,
                         stiffness: 500,
                    }}
                    animate={{ opacity: 1 }}
                    className={cn['header-container']}
               >
                    <Image srcDefault={'/logo.svg'} />
                    <p className={cn['header-container__subtitle']}>budss</p>
               </motion.div>

               <Button
                    label={'Contact sales'}
                    onClick={() => setModalIsOpen(true)}
               />
          </header>
     );
};

export default Header;
