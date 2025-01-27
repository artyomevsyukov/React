import "./app-filter.css"
import { Component } from "react"
import classNames from "classnames"

class AppFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeFilters: [], // Массив для хранения активных фильтров
      rise: false,
      salary: false,
    }
  }

  toggleFilter = (filter) => {
    this.setState((prevState) => {
      // Если фильтр уже активен, удаляем его из массива, иначе добавляем
      const isActive = prevState.activeFilters.includes(filter)
      return {
        activeFilters: isActive
          ? prevState.activeFilters.filter((f) => f !== filter)
          : [...prevState.activeFilters, filter],
      }
    })
  }

  onValueChange = () => {
    let rise = !this.state.rise
    this.setState({ rise })
    console.log(rise)
    this.props.onUpdateRise(rise)
  }

  handleRiseClick = () => {
    this.toggleFilter("rise")
    this.onValueChange()
  }

  render() {
    const { activeFilters } = this.state

    return (
      <div className="btn-group">
        {/* Кнопка "Все сотрудники" */}
        <button
          className={classNames("btn", {
            "btn-light": activeFilters.length === 0, // Активна, если нет фильтров
            "btn-outline-light": activeFilters.length > 0,
          })}
          type="button"
          onClick={() => this.setState({ activeFilters: [] })} // Сброс всех фильтров
        >
          Все сотрудники
        </button>

        {/* Кнопка "На повышение" */}
        <button
          className={classNames("btn", {
            "btn-light": activeFilters.includes("rise"), // Активна, если фильтр "rise" в массиве
            "btn-outline-light": !activeFilters.includes("rise"),
          })}
          type="button"
          onClick={this.handleRiseClick} // Переключение фильтра "rise"
        >
          На повышение
        </button>

        {/* Кнопка "З/П больше 1000$" */}
        <button
          className={classNames("btn", {
            "btn-light": activeFilters.includes("salary"),
            "btn-outline-light": !activeFilters.includes("salary"),
          })}
          type="button"
          onClick={() => this.toggleFilter("salary")} // Переключение фильтра "salary"
        >
          З/П больше 1000$
        </button>

        {/* Добавление новых фильтров (пример) */}
      </div>
    )
  }
}

export default AppFilter
