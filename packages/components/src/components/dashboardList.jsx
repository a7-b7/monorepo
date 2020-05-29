import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import DashboardCard from './dashboardCard'

const data=[
    {
        title: 'Listing',
        icon: 'fa-th-list',
        text: 'Provide personal details and how we can reach you'
    },
    {
        title: 'Inbox',
        icon: 'fa-envelope',
        text: 'Update your password and secure your account'
    },
    {
        title: 'Offers',
        icon: 'fa-arrow-alt-circle-right',
        text: 'Update your password and secure your account'
    },
    {
        title: 'Viewing',
        icon: 'fa-eye',
        text: 'Update your password and secure your account'
    },
];

export default function dashboardList() {
  return (
    <div className="container mt_50">	
	<h1>Dashboard</h1>
	<div className="d-flex flex-wrap mt_10 dashboard_block">
        {data.map(el=>{
            const {title, icon, text} = el;
            return (
                <DashboardCard title={title} icon={icon} text={icon} />
            );
        })}
    </div>
</div>
  );
};