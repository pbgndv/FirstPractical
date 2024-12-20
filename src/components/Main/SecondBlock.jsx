import Image from '../Image';
import cn from './SecondBlock.module.scss';

export const SecondBlock = () => {
     return (
          <section className={cn['section-2']}>
               <h1 className={cn['section-2__title']}>About Budss</h1>
               <div className={cn['section-2--container']}>
                    <div>
                         <Image srcDefault={'/paymentTitle.svg'} />
                    </div>
                    <ul>
                         <li>
                              <Image
                                   srcDefault={'/contactless.svg'}
                              />
                              <p>Contactless</p>
                              <span>
                                   Budss uses near field communication (NFC) for
                                   making contactless payments.
                              </span>
                         </li>
                         <li>
                              <Image srcDefault={'/increase.svg'} />
                              <p>Increased Buying Power</p>
                              <span>
                                   Returning customers spend up to 3X more.
                              </span>
                         </li>
                         <li>
                              <Image srcDefault={'/analytic.svg'} />
                              <p>Analytics & Insights</p>
                              <span>
                                   Gain a holistic view into your customers’
                                   buying behavior & purchasing patterns.
                              </span>
                         </li>
                         <li>
                              <Image srcDefault={'/fraud.svg'} />
                              <p>Fraud Protection</p>
                              <span>
                                   Budss handles all payments with a fraud
                                   prevention algorithm to flag high risk
                                   purchases & a user set PIN code to keep
                                   payment info secure.
                              </span>
                         </li>
                    </ul>
               </div>
               <Image
                    srcDefault={'/vector-increw.svg'}
                    className={cn['section-2--vector']}
               />
          </section>
     );
};
