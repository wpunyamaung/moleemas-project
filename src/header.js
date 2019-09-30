import React from 'react';

function Header() {
    return (
        <div className="banner card-header">
            <div className="logo">
                <img src="logo-main.png" class="img-fluid" alt="Responsive image"></img>
            </div>
            <div className="company">
                <h3 class="text-center">
                    รายงานผลงานประจำวัน โครงการเหมืองขุดและขนดินเหมืองหงสา  สปป.ลาว
                </h3>
                <p class="h4 pt-3">บริษัท อิตาเลียนไทยหงสา จำกัด</p>
            </div>
        </div>
    )
}

export default Header;
