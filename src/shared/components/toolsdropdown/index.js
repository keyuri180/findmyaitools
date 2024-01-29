import React from 'react'
import styles from './toolsdropdown.module.scss';
const NoteIcon = '/assets/icons/note.svg';
const DropdownArrowIcon = '/assets/icons/dropdown-arrow.svg';
export default function Toolsdropdown() {
  return (
    <div className={styles.toolsdropdown}>
      <button>
        <img src={NoteIcon} alt='NoteIcon'/>
        New
        <img src={DropdownArrowIcon} alt="DropdownArrowIcon"/>
      </button>
    </div>
  )
}
