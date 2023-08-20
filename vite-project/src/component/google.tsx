import React from 'react'
import MenuGl from '../assets/menu-4.svg'
import Search from '../assets/search-alt.svg'
import Microphone from '../assets/microphone-svgrepo.svg'
import SearchImg from '../assets/folder-image.svg'

function google() {
  return (
    <div className="content">
      <div className="navbar">
            <div><p>Gmail</p></div>
            <div><p>Images</p></div>
            <div><p><img src={MenuGl}className="Menu"></img></p></div>
            <div><p className="IconGoogle">Kiw</p></div>
      </div>
      <div className="SearchItem">
          <div className="ItemTitle"><h1>Google</h1></div>
          <div className="ItemInput">
            <img src={Search} className="Input-Search" />
            <img src={Microphone} className="Input-Microphone" />
            <img src={SearchImg} className="Input-SearchImg" />
            <input/>
          </div>
          <div className="ItemGroupButton">
                <div><button>Google Search</button><button>I'm Feeling Lucky</button></div>
                <div className="Item-Th"><p>Google offered in:  </p><p>ภาษาไทย</p></div>
          </div>
      </div>
      <div className="about">
            <div className="Item-About-th">
                <p>Thailand</p>
            </div>
            <div className="Item-About-detail">
                <div className="Item-detail-right">
                    <p>About</p>
                    <p>Advertising</p>
                    <p>Business</p>
                    <p>How Search works</p>
                </div>
                <div className="Item-detail-left">
                    <p>Privacy</p>
                    <p>Terms</p>
                    <p>Setting</p>
                </div>
        
            </div>
      </div>
    </div>
  )
}

export default google
