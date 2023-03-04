import React from 'react'
import { Instagram} from '@mui/icons-material'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../Styles/Footer.css"
function Footer() {
  return (
    <div class="footer">
      <div className='socialmedia'>
        <Instagram/><FacebookIcon/><TwitterIcon/><LinkedInIcon/>
      </div>
      <p>&copy; 2021 pizzahut.com </p>
    </div>
  )
}

export default Footer
