import Layout from "@/components/Layout";
import MyPieChart from "@/components/Pie_Chart";
import MyLineChart from "@/components/Line_Chart";
import { useState } from "react";
const Dashboard = () => {
    const dataPiePer = [
        { status: 'Completed', value: 2 },
        { status: 'In Progress', value: 5 },
        { status: 'Not Started', value: 3 }
    ];
    const dataPieTeam = [
        { status: 'Completed', value: 3 },
        { status: 'In Progress', value: 1 },
        { status: 'Not Started', value: 1 }
    ];
    const dataLinePer = [
        { status: "Jan",Completed: 1,In_Progress: 2,},
        { status: "Feb",Completed: 1,In_Progress: 2,},
        { status: "Mar",Completed: 2,In_Progress: 3,},
        { status: "Apr",Completed: 3,In_Progress: 4,},
        { status: "May",Completed: 5,In_Progress: 6,},
        { status: "Jun",Completed: 6,In_Progress: 7,}
    ];
    const dataLineTeam = [
        { status: "Jan",Completed: 1,In_Progress: 3,},
        { status: "Feb",Completed: 1,In_Progress: 3,},
        { status: "Mar",Completed: 2,In_Progress: 5,},
        { status: "Apr",Completed: 3,In_Progress: 5,},
        { status: "May",Completed: 5,In_Progress: 6,},
        { status: "Jun",Completed: 6,In_Progress: 7,}
  ];
    const [clickedPer, setClickedPer] = useState(true);
    const handleClickPer = () => {
      setClickedPer(false);
      setClickedTeam(true);
    };
    const [clickedTeam, setClickedTeam] = useState(false); 
    const handleClickTeam = () => {
      setClickedTeam(false);
      setClickedPer(true);
    };
    return <Layout>
        <div className="mt-24 ml-80  bg-gradient-to-b from-lime-500 to-yellow-500 h-14 w-2/5 rounded-tl-xl rounded-xl border text-center">
          <div className="m-2">
            <p>Hi <b>Nguyen Hoang Hai</b>, you have <b>10</b> personal tasks and <b>8</b> group task. </p>
          </div>
        </div>          
        <div className="flex mt-6">
          <button className="btn-secondary ml-80 text-center">
            <div  className={clickedPer ? 'btn-secondary clicked' : 'btn-secondary'} onClick={handleClickTeam}>Personal</div>
          </button>
          <button className="btn-secondary ml-0 ">
            <div className={clickedTeam ? 'btn-secondary clicked' : 'btn-secondary'} onClick={handleClickPer}>Team</div>
          </button>
        </div>
        
        <div className="flex">
            <div className="mt-20 ml-80 bg-gray-200 w-80 text-center">
                <div className="mb-6">
                  <b>PieChart</b>
                </div>
                {/* <MyPieChart data={dataPiePer}/>  */}
                {clickedPer ? <MyPieChart data={dataPiePer} /> : <MyPieChart data={dataPieTeam} />}
            </div>
            <div className="mt-20 ml-80 bg-gray-200 w-96 text-center">
                <b>LineChart</b>
                {/* <MyLineChart data={dataLine}/> */}
                {clickedTeam ? <MyLineChart data={dataLineTeam} /> : <MyLineChart data={dataLinePer} />}
            </div>
        </div>   
    </Layout>
}

export default Dashboard;