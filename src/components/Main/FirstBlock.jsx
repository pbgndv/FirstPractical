import { useContext, Fragment } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../UI/Button/Button';
import Image from '../Image';
import cn from './FirstBlock.module.scss';
import { ModalContext } from '../../contexts/ModalContext';

const TRANSITION = {
	logo: 0.25,
	button: 0.25,
	title: (i) => (i + 1) / 10,
	paragraph: 2.6,
	womanImage: 2.6,
}

export const FirstBlock = () => {
     const { setModalIsOpen } = useContext(ModalContext);
     const text = 'Everyone is an Influencer'.split(' ');

     return (
          <section className={cn['section-1']}>
               <aside className={cn['section-1__left']}>
                    <motion.h1>
                         {text.map((el, i) => (
                              <Fragment key={i}>
                                   <motion.span
                                        initial={{ opacity: 0, position: 'relative', left: -1000}}
                                        animate={{ opacity: 1, left: 0 }}
                                        transition={{
                                             duration: 0.25,
                                             delay: i / 1.2,
                                        }}
                                   >
                                        {el}{' '}
                                   </motion.span>
                                   {el === 'Everyone' && (
                                        <motion.br
                                             initial={{ opacity: 0 }}
                                             animate={{ opacity: 1 }}
                                             transition={{
                                                  duration: 0.25,
                                                  delay: TRANSITION.title(i),
                                             }}
                                        />
                                   )}
                              </Fragment>
                         ))}
                    </motion.h1>
                    <motion.p
                         initial={{
                              position: 'relative',
                              left: -30,
                              opacity: 0,
                         }}
                         transition={{
                              delay: TRANSITION.paragraph,
                         }}
                         animate={{ left: 0, opacity: 1 }}
                    >
                         Budss is a payments as a service and WOM engine
                         dedicated
                         <br />
                         to acquisition and retention of customers to your
                         business.
                    </motion.p>

                    <Button
                         label={'Contact sales'}
                         type="Primary"
                         onClick={() => setModalIsOpen(true)}
                    />
               </aside>
               <motion.figure
                    className={cn['section-1__right']}
                    initial={{ position: 'relative', right: -30, opacity: 0 }}
                    animate={{ right: 0, opacity: 1 }}
                    transition={{
                         delay: TRANSITION.womanImage,
                    }}
               >
                    <Image
                         className={cn['section-1__right-woman']}
                         srcDefault={'/woman.png'}
                    />
               </motion.figure>
          </section>
     );
};
