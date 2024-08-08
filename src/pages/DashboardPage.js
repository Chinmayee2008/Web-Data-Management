import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './DashboardPage.css';

const DashboardPage = () => {
  const navigate = useNavigate();

  // Define your cards and corresponding navigation paths
  const cards = [
    {
      title: 'User Management',
      image: 'https://cdn3.vectorstock.com/i/1000x1000/91/57/user-management-icon-vector-22989157.jpg',
      path: '/user-management'
    },
    {
      title: 'Healthcare Provider Management',
      image: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=sph',
      path: '/healthcare-provider-management'
    },
    // Add other cards here
    {
        title: 'Patient Health Records(PHR)',
        image: 'https://c8.alamy.com/comp/2NFBDJ9/vector-of-a-doctor-checking-up-on-a-female-patient-lying-on-bed-with-dropper-during-treatment-in-clinic-2NFBDJ9.jpg',
        path: '/patient-health-records'
      },
      
      {
        title: 'Appointment Management',
        image: 'https://schedule.cc/images/blog/appointment-scheduling-solution.png?v=1684144480862882721',
        path: '/appointment-management'
      },
      
      {
        title: 'Community Interactions',
        image: 'https://images.ctfassets.net/pdf29us7flmy/4y2tFzoQTzmiTfeWqC70zf/b54e3d73eb7d1dbd7fedb4166d6af115/community-health-worker-US.png',
        path: '/community-interactions'
      },

      {
        title: 'Analytics Dashboard',
        image: 'https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713139200&semt=sph',
        path: '/analytics-dashboard'
      },
      
      {
        title: 'Data Oversights Dashboard',
        image: 'https://cdn-icons-png.flaticon.com/512/6821/6821002.png',
        path: '/data-oversights-dashboard'
      },

  ];

  return (
    <div className="dashboard-page">
      <Navbar username="Admin" />
      <div className="dashboard-cards">
        {cards.map((card, index) => (
          <div
            key={index}
            className="dashboard-card"
            onClick={() => navigate(card.path)}
          >
            <div className="card-image-container">
              <img src={card.image} alt={card.title} />
            </div>
            <div className="card-title">{card.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
