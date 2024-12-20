import cn from './BannerBlock.module.scss';
export const BannerBlock = () => {
     return (
          <section className={cn['section-banner']}>
               <li>
                    <h1>15%</h1>
                    <p>
                         <span className={cn['line-break']}>Increase</span> in
                         Purchase Amount
                    </p>
               </li>
               <li>
                    <h1>30%</h1>
                    <p>
                         <span className={cn['line-break']}>Growth</span> in
                         Annual Sales
                    </p>
               </li>
               <li>
                    <h1>10%</h1>
                    <p>
                         <span className={cn['line-break']}>Growth</span> in New
                         Customers
                    </p>
               </li>
          </section>
     );
};
