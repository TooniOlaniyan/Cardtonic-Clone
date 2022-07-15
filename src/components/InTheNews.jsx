import React from 'react'
import sellLine from '../assets/Svgs/sellLine.svg'
import vanguard from '../assets/Svgs/vanguard.svg'
import azcentral from '../assets/Svgs/azcentral.svg'
import punch from '../assets/Svgs/punch.svg'
import match from '../assets/Svgs/match.svg'
import digital from '../assets/Svgs/digital.svg'
import techpoint from '../assets/Svgs/techpoint.svg'

function InTheNews() {
  return (
    <div className="centerNews">
      <div className="newsContainer">
        <div className="newsTextFlex">
          <p>
            As a demonstration of our quality service and awesome impression, we
            have been published by some platforms across Nigeria, Ghana and
            beyond.
          </p>
          <span className="downloadLine"></span>

          <div className="cardtonicNews">
            <h1>Cardtonic in the news</h1>
            <img className='newsLine' src={sellLine} alt="" />
          </div>
        </div>

        <div className="newsCenter">
          <img src={vanguard} alt="" />
          <img src={azcentral} alt="" />
          <img src={punch} alt="" />
          <img src={match} alt="" />
          <img src={digital} alt="" />
          <img src={techpoint} alt="" />
        </div>
        <span className="horizontalLine"></span>
        <p className='skillUpText' style={{color:'#00cede' , fontSize:'16px'}}>Follow our ongoing Upskill #CardtonicMacbookGiveaway program</p>
      </div>
    </div>
  );
}

export default InTheNews