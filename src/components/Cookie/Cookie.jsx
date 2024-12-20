import { Button } from '../index';
import cn from './Cookie.module.scss';

export const Cookie = ({ show, setShow }) => {
     return (
          <main className={cn['Cookie-wrapper']}>
               <div className={cn['Cookie']}>
                    <span>
                         This website uses cookies to ensure you get the best
                         experience on our website. They also allow us to
                         analyze user behavior in order to constantly improve
                         the website for you.
                    </span>
                    <div className={cn['Cookie--button-container']}>
                         <Button
                              label={'Accept'}
                              type="Primary"
                              onClick={() => setShow(false)}
                         />
                         <Button
                              label={'Decline'}
                              type="Secondary"
                              onClick={() => setShow(false)}
                         />
                    </div>
               </div>
          </main>
     );
};
