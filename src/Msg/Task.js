export default function Task({ id, todo = "沒事",i}) {
  return (
    <div className="msg">
      <div style={{padding:"10px 0"}}><span style={{fontWeight:"bold",marginRight:"10px"}}>{"匿名"+(i+1)}</span>{todo}</div>
    </div>
  );
}
