import Image from '../Image';
import cn from './ThirdBlock.module.scss';

export const ThirdBlock = () => {
     return (
          <section className={cn['section-3']}>
               <div className={cn['section-3--phone-wrapper']}>
                    <Image
                         srcDefault={'/phone.png'}
                         className={cn['section-3--phone-wrapper__image']}
                    />
               </div>
               <marquee direction="right">
                    <div className={cn['Secondary-01']}>
                         <Image
                              srcDefault={'/hwb.png'}
                              className={cn['hwb']}
                         />
                         <span>How Budss Works</span>
                         <Image
                              srcDefault={'/hwb.png'}
                              className={cn['hwb']}
                         />
                    </div>
               </marquee>
               <marquee>
                    <div className={cn['Primary']}>
                         <Image
                              srcDefault={'/hwb.png'}
                              className={cn['hwb']}
                         />
                         <span>How Budss Works</span>
                         <Image
                              srcDefault={'/hwb.png'}
                              className={cn['hwb']}
                         />
                    </div>
               </marquee>
               <marquee direction="right">
                    <div className={cn['Secondary-02']}>
                         <Image
                              srcDefault={'/hwb.png'}
                              className={cn['hwb']}
                         />
                         <span>How Budss Works</span>
                         <Image
                              srcDefault={'/hwb.png'}
                              className={cn['hwb']}
                         />
                    </div>
               </marquee>
          </section>
     );
};
