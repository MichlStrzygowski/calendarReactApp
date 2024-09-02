function daysInThisMonth() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
  }

function Calender() {

    //const  currentDate = new Date();
console.log(daysInThisMonth());

  return (
    <div>
      <h1>Calendar</h1>
    </div>
  );
}

export default Calender;