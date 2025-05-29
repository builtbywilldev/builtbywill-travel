import { Header } from "components";

const Dashboard = () => {
  const user = { name: 'Violet'}
  return (
    <main className="dashboard wrapper">
      <Header 
        title={`Welcome ${user?.name ?? 'guest'} 👋`}
        description="Track activity, trends and popular destinations in real time "
      />



      Dashboard Page contents


    </main>
  )
    
};


export default Dashboard;
