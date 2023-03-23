import React from 'react'
import MyTabsPanel from '../../../UI/MyTabsPanel'
import styles from './ProfileContent.module.scss'

export const ProfileContent = () => {
  return (
    <>
      <div className={styles.main}>
        <MyTabsPanel />
      </div>
    </>
  )
}
