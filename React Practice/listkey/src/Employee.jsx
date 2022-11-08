const Employee = (props) => {
  const {name,id} = props;
  return(
 <div>
<h1>{name}</h1>
<h1>{id}</h1>
</div>
)
}

export default Employee
