import React from "react"

const Header = (props) => {
  let activate1 = null
  let activate2 = null
  let activate3 = null
  let activate4 = null
  let activate5 = null
  let activate6 = null

  switch (props.state.currentPage) {
    case "mainPage":
      activate1 = "active"
      break
    case "sparrowsPage":
      activate2 = "active"
      break
    case "forestBirdsPage":
      activate3 = "active"
      break
    case "songBirdsPage":
      activate4 = "active"
      break
    case "predatorBirdsPage":
      activate5 = "active"
      break
    case "seaBirdsPage":
      activate6 = "active"
      break
    default:
      return null
  }

  return (
    <div className="header d-flex">
      <div className="top-panel d-flex">
        <div className="logo"></div>
        <h5>
          Score: <span className="score">{props.state.totalPoint}</span>
        </h5>
      </div>
      <ul className="pagination">
        <li className={`page-item ${activate1}`}>
          <a className="page-link" href="/#">
            Разминка
          </a>
        </li>
        <li className={`page-item ${activate2}`}>
          <a className="page-link" href="/#">
            Воробьиные
          </a>
        </li>
        <li className={`page-item ${activate3}`}>
          <a className="page-link" href="/#">
            Лесные птицы
          </a>
        </li>
        <li className={`page-item ${activate4}`}>
          <a className="page-link" href="/#">
            Певчие птицы
          </a>
        </li>
        <li className={`page-item ${activate5}`}>
          <a className="page-link" href="/#">
            Хищные птицы
          </a>
        </li>
        <li className={`page-item ${activate6}`}>
          <a className="page-link" href="/#">
            Морские птицы
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Header
