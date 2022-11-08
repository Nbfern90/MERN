const Results = (props) => {

  const{tabs} = props;
 



  return (
    <div>
      <h1>Results</h1>
      <div className="content">
      {tabs.content[tabs.tab]}
      </div>
    </div>
  )
}

export default Results
