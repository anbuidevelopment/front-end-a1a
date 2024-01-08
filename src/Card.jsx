const Card = props => {
  return (
    <div className='bg-slate-100 p-11 my-9 mx-6 rounded-md'>
      {props.children}
    </div>
  );
};

export default Card;
