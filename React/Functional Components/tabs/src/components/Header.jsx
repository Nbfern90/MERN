const Header = (props) => {

const{tabs,setTabs} = props;

const clickHandler =(index) => {
  setTabs({
    ...tabs,
    tab: index,
  })
}

  return (
    <div >
      <h1>Header</h1>
      {
        tabs.content.map((index) => (<div className="tab" onClick={()=> clickHandler(index)}>
          Tab {index + 1}
        </div>
          ))
      }
    </div>
  )
}

export default Header
