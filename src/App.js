import React, {useEffect} from 'react';
import './App.css';
import Form from './Form/Form'
import WeekSelector from './WeekSelector/WeekSelector'
import Schedule from "./Schedule/Schedule";
import Recommendations from './Recommendations/Recommendations'
import ScheduleHeader from "./Schedule/ScheduleHeader";
import Download from "./Download/Download";
import Loader from "./Loader";

function App() {
    const [schedule, setSchedule] = React.useState([]);
    const [rows, setRows] = React.useState([]);
    const [columns, setColumns] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        fetch('http://www.json-generator.com/api/json/get/ceHLoAgyeW?indent=2')
            .then(resp => resp.json())
            .then(data => {
                setSchedule(data[0].cell);
                setRows(data[0].rows);
                setColumns(data[0].columns);
                setLoading(false)
            })
            .catch(error => console.error(error));
    }, []);

  return (
    <div className="App">
      <div className="top">
        <h2>Personalized meal plan</h2>
        <h4>
          You can also access your meal plan via email that you received.
          If not received, please contact <a href="mailto:supportdc@bodyfitplan.me?subject=Email from website">supportdc@bodyfitplan.me</a>
        </h4>
      </div>
      <Form/>
      <WeekSelector/>

      <ScheduleHeader/>
        {loading ? <Loader/> : <Schedule schedule={schedule} columns={columns} rows={rows}/>}
      <Download/>
      <Recommendations/>
    </div>
  );
}

export default App;
