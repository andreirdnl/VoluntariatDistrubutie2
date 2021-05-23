import { Beneficiary, Donor, Donation, LocationMap } from '..'
import style from './style.module.css' 
import style2 from '../../styles/button.module.css'

  
  export const TripDetails: view = ({
      finishedItem = update.finishedItem,
      data = observe.dataSet[prop.index]
  }) => {
    const {donator,recipient,donation} = data
    return (
      <div data-ui="TripDetails" className={style.details}>
        <div role="row">
          <div role="cell" className={style.col1}>
            <Donor donator={donator}/>
            <Beneficiary beneficiar={recipient}/>
          </div>
          <div role="cell" className={style.col2}>
            <Donation donation={donation}/>
          </div>
          <div role="cell" className={style.col3}>
            <LocationMap/>
          </div>
        </div>
        <div className={style['button-wrapper']}>
          <button className={style.button + ' ' + style2.button} onClick={()=>finishedItem.set(data)}>
            Accepta Cursa
          </button>
        </div>
      </div>
    )
  };
  