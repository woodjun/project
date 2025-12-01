import { useRef, useState } from "react"
import "./index.css"
import { nanoid } from "nanoid";

export default function App() {
  const priceRef = useRef()

  const initPrice = 755700;
  const initMuNum = 629.7478;
  const initPriceArea = 20;
  const [price, setPrice] = useState(initPrice)
  const [muNum] = useState(initMuNum)
  const [isAdd, setIsAdd] = useState(true)
  const [log, setLog] = useState([])
  const priceUnit = 1000;
  const arr = new Array(10).fill(1).map((item, i) => item * (i + 1))
  const priceArr = new Array(21).fill(1200).map(
    (item, i) => item + i * initPriceArea
  )

  function add() {
    setIsAdd(true)
  }

  function sutract() {
    setIsAdd(false)
  }

  function handleLog(price, count, isReset=false) {
    const obj = {
      id: nanoid(),
      price,
      increment: count * priceUnit,
      type: isAdd ? '+' : '-',
      result: isAdd ? price + (count * priceUnit) : price - (count * priceUnit),
      isReset
    }
    setLog([obj, ...log])
  }

  function operate(count) {
    if (isAdd) {
      setPrice(price + (count * priceUnit))
      handleLog(price, count)
    } else if (price - (count * priceUnit) >= initPrice){
      setPrice(price - (count * priceUnit))
      handleLog(price, count)
    }
  }

  function getActiveClass(curPrice, nextPrice) {
    const sum = price/muNum
    return sum >= curPrice && sum < nextPrice? 'tender-row active' : 'tender-row'
  }
  
  function changePrice() {
    const value = +priceRef.current.value
    if (value && value >= initPrice) {
      setPrice(value)
      handleLog(value, 0, true)
    } else {
      alert(`请输入大于或等于${initPrice}的值`)
    }
  }
  return (
    <div className="app">
      <div className="app-container">
        <div className="tender">
          <h2>虾塘竞标</h2>
          <div className="tender-table">
            <div className="tender-row">
              <div className="tender-col">当前价格：</div>
              <div className="tender-col">{price}</div>  
            </div>
            <div className="tender-row">
              <div className="tender-col">亩数：</div>
              <div className="tender-col">{muNum}</div>  
            </div>
            <div className="tender-row">
              <div className="tender-col">每亩价格：</div>
              <div className="tender-col">{(price/muNum).toFixed(3)}</div>  
            </div>
            <div className="tender-row">
              <div className="tender-col">5年价格：</div>
              <div className="tender-col">{price * 5}</div>  
            </div>
            <div className="tender-row">
              <div className="tender-col">操作类型：</div>
              <div className="tender-col">{isAdd ? '+' : '-'}</div>  
            </div>
            <div className="tender-row">
              <div className="tender-col type">
                <button className="type-btn" onClick={add}>+</button>&nbsp;&nbsp;
                <button className="type-btn" onClick={sutract}>-</button>
              </div>
              <div className="tender-col operate">
                {
                  arr.map(item => (<button className="btn" key={item} onClick={() => operate(item)}>{item}</button>))
                }
              </div>
            </div>
            <div className="tender-row">
              <div className="tender-col type">输入价格：</div>
              <div className="tender-col price-col">
                <input style={{width: '60%', marginRight: '10px'}} type="text" placeholder="请输入价格" ref={priceRef} />
                <button onClick={changePrice}>改动</button>
              </div>  
            </div>
          </div>
        </div>
        <div className="price">
          <h2>价格区间</h2>
          <div className="tender-table">
            <div className="tender-row">
              <div className="tender-col">每亩价格</div>
              <div className="tender-col">1年价格</div>
              <div className="tender-col">5年价格</div>
            </div>
            <div className="tender-body">
                {
                  priceArr.map((item, i) => (
                    <div className={getActiveClass(item, item + initPriceArea)} key={i}>
                      <div className="tender-col">{item}</div>
                      <div className="tender-col">{(item * initMuNum).toFixed(2)}</div>
                      <div className="tender-col">{(item * initMuNum * 5).toFixed(2)}</div>
                    </div>
                  ))
                }
            </div>
          </div>
        </div>
      </div>
      <div className="log-container">
        <div className="log">
          <h2>操作日志</h2>
          <div className="tender-table">
            <div className="tender-body">
              {
                log.map((item, i) => {
                  if (item.isReset) {
                    return (
                      <div className="tender-row" key={item.id}>
                        <div className="tender-col">重新设置价格为{item.price}</div>
                      </div>
                    )
                  }
                  return (
                    <div className="tender-row" key={item.id}>
                      <div className="tender-col">{item.price}{item.type}{item.increment}={item.result}</div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

