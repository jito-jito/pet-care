import react from "react";
import styles from './Employees.module.css'

import Carousel from '../Carousel/index'
import EmployeeCard from '../../components/EmployeeCard'

import employee1 from '../../assets/images/employee1.png'
import employee2 from '../../assets/images/employee2.png'
import employee3 from '../../assets/images/employee3.png'
import employee4 from '../../assets/images/employee4.png'

function Employees({

}) {

  return (
    <>
      <Carousel
        className={styles.employeesCarousel}
        subTitle="Our Team"
        title="Meet Our Groomers"
      >
        <EmployeeCard
          name="Rosalina Wiliam"
          position="CEO & Founder"
          imageUrl={employee1}
        />
        <EmployeeCard
          name="Rosalina Wiliam"
          position="CEO & Founder"
          imageUrl={employee2}
        />
        <EmployeeCard
          name="Rosalina Wiliam"
          position="CEO & Founder"
          imageUrl={employee3}
        />
        <EmployeeCard
          name="Rosalina Wiliam"
          position="CEO & Founder"
          imageUrl={employee4}
        />
      </Carousel>
    </>
  )
}



export default Employees