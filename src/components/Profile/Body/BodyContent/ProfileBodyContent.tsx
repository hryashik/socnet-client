import React from 'react'
import MyTabsPanel from '../../../UI/MyTabsPanel'
import styles from './ProfileBodyContent.module.scss'

export const ProfileBodyContent = () => {
  return (
    <>
      <div className={styles.main}>
        <MyTabsPanel />
      </div>
    </>
  )
}
