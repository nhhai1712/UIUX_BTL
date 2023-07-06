import Layout from "@/components/Layout";

function Homepage() {
  return (
    <Layout>
      <div>
        <div className="mt-20 ml-72  bg-gradient-to-b from-lime-500 to-yellow-500 w-1/5 rounded-tl-xl rounded-xl border flex">
          <div className="m-2">
            <b>Welcome to EasyManage</b>
            <br></br>
            <b>Have a great day</b>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Homepage;