import React from 'react';
import Header from '../../header.jsx';
import { Link } from 'react-router';


var ExpoTerms = React.createClass({
  render: function() {
    var burgerMenuOptions = ["About+/expo-about", "Start Again+/", "FAQ+/expo-faq"]

    return (
      <div>
        <Header headerTheme={"whiteNav"} text={"Terms and Conditions"} iconRight={"menu"} iconLeft={"arrow_back"} burgerMenuOptions={burgerMenuOptions}/>
        <div className="desktop-container">
          <div className="content-container margin-all">
              <h3>PICCNICC TERMS AND CONDITIONS OF SERVICE</h3>
              <p>Welcome to piccnicc.com website and our applications (each our "Service"). This page (together with the documents referred to on it) tells you the terms and conditions on which we supply any meals prepared and packaged by restaurants listed on our site to you (the "Meals"). Please read these terms and conditions carefully before ordering any Meals from our site. By accessing our site and placing an order you agreed to be bound by these terms and conditions and our terms of use policy.
              If you have any questions relating to these terms and conditions please contact orders@piccnicc.com before you place an order. If you do not accept these terms and conditions in full please do not use our Service.</p>
              <br></br>
              <h4>1. INFORMATION ABOUT US</h4>
              <p>piccnicc.com is a website operated by Piccnicc Limited ("we" or "us" or "Piccnicc"), incorporated and registered in the England and Wales, whose registered office is at 31, King Street West, Manchester, M3 2PJ, United Kingdom. Our Company registration number is 09691739. Our VAT number is 221 2207 71. Piccnicc is a business where the food is prepared by independent restaurants (the "Restaurants") and delivered by us.</p>
              <br></br>
              <h4>2. PURPOSE & COMMERCIAL RELATIONSHIP</h4>
              <p>The purpose of our Service is to provide a simple and convenient service to you, linking you to the Partner Restaurant and menu of their choice and allowing you to order Meals from them. Piccnicc markets Meals prepared and sold by the Restaurants, takes orders for the Meals and delivers the Meals to you.
              Piccnicc is not affiliated to or otherwise commercially engaged with any of the Restaurants and we do not make any representation, nor intend to create any expectation or understanding to the contrary in respect of you or any Restaurant.
              You are only contracting with us in relation to the accurate processing and delivery of each confirmed order (an “Order”), to the extent we are able to control those factors. In relation to factors over which we have no control, such as the quality of the food, or a Restaurant’s preparation or packing of your Meal, that is between you and the relevant Restaurant. Our responsibility in this latter regard extends only to providing you with proof of purchase of the Meal should you need the same.</p>
              <br></br>
              <h4>3. SERVICE AVAILABILITY</h4>
              <p>Piccnicc offers an ordering and delivery service from Restaurants at a variety of venues, as promoted by us. Each venue has a selection of associated local Restaurantsto ensure a choice of Meals and that those Meals can be delievered to you in the most efficient way possible and  in good time. We do not accept orders for delivery other than to the venues promoted, on the days and at the available times offered.  Operating hours will vary depending on local requirements and the availability of the Restaurants. Please click on the relevant link to view the menus on our Service, and then click on your chosen menu which will provide you with the option to submit your order for your Meals. If you wish to order Meals from more than one Restaurant for delivery together, just select the different Meals accordingly.</p>
              <br></br>
              <h4>4. ORDERS</h4>
              <p>When you place an Order through our Service, an email thanking you for your order and confirming your order has been received (the "Confirmation Email") will be sent to you by us . Please ensure that you have given us a correct email address as this is how we will communicate with you about your Order. Please also ensure that you provide accurate delivery details where prompted and telephone number to ensure that your Meals arrive to the correct location, and that you or someone with your Order details (your “Substitute”) is at the correct location at the requested delivery time. If you (or your Substitute) are not at the relevant location and do not respond to telephonic correspondence within 5 minutes of our delivery personnel physically arriving there with your Order, we reserve the right to leave the location (leaving the Order with someone to look after it for you, if appropriate), and you will be charged for the Meal. Piccnicc seeks to provide a quality service and will be the first contact in event in there is a problem with the accuracy of your Order or the way in which it is delivered. If you have any issues regarding the food quality and/or temperature of the Meal, you should address this directly with the Restaurant.   Please let us know if you have any comments relating to our Service by emailing us.</p>
              <br></br>
              <h4>5. MEALS</h4>
              <p>All Meals are subject to availability. If a Meal is not available at the time of fulfilling your Order, we will seek to contact you by phone to discuss a susbstitute Meal. If you wish to cancel your Order at that time you are free to do so as if your Order was not a Live Order (see Clause 8 below). If we cannot make contact at that time, we will substitute the unavailable Meal with what we deem to be the best alternative and you will be deemed to have ordered that Meal accordingly, provided that neither of us shall be liable to the other for any cost difference between the two. Restaurants may use nuts in the preparation of certain Meals. Please call the relevant Restaurant prior to ordering if you have an allergy. Piccnicc cannot guarantee that any of the Meals sold by our Restaurants are free of allergens.</p>
              <br></br>
              <h4>6. SALE OF ALCOHOL</h4>
              <p>Persons placing an order for alcohol from our Restaurants must be aged 18 or over. Alcoholic beverages can only be sold and delivered to persons aged 18 or over.  By placing an order that includes alcohol, you confirm that you are at least 18 years old. Piccnicc reserves the right to refuse to deliver any alcohol to any person who does not appear, or cannot prove they are, aged 18 or over. Piccnicc also reserves the right to refuse to deliver any alcohol to any person who is, or appears to be, under the influence of either alcohol or drugs.</p>
              <br></br>
              <h4>7. AVAILABILITY AND DELIVERY</h4>
              <p>Our aim is to provide the best delivery service possible. Unfortunately things do not always go to plan and factors, such as delays at Restaurants or overcrowding at venues, may occasionally prevent us from achieving our targets in this regard. We will do our best to ensure that your Meal is delivered by the time specified in the email and webpage. The timing of your order is determined by taking into account the number of orders and the circumstances being faced by the Restaurant(s) at that time.</p>
              <br></br>
              <h4>8. CANCELLATION</h4>
              <p>You have the right to cancel an Order within a reasonable time and before the Order becomes a Live Order. A “Live Order” is any Order which is cancelled (outright, or to change the Order) less than 45 (forty-five) minutes before the Order was due to be delivered according to its terms. You can cancel an Order by pressing the ‘Cancel’ button on your Confirmation Email, or any subsequent method for so doing provided for that purpose by us. Piccnicc reserves the right to cancel any Order at any time and will tell you in such event. You will not be charged for any orders cancelled in accordance with this clause, save for Live Orders. Any payment made prior to an Order being cancelled will usually be reimbursed using the same method you used to pay for the Order. Any Order cancelled after it becomes a Live Order will be charged to you. Piccnicc alone will determine whether an order is a Live Order or not.</p>
              <br></br>
              <h4>9. PRICE AND PAYMENT</h4>
              <p>The price of any Meals will be listed on our Service. Prices include any applicable taxes such as VAT. Prices may vary between menus. Prices are liable to change at any time, but changes will not affect orders in respect of which you have been presented with the Confirmation Email, save in the case of an obvious pricing mistake, whereby we will notify you as soon as we can about the pricing issue. You may be able to cancel your order once we notify you. Despite our best efforts, some of the Meals listed on our Service may be incorrectly priced. Payment for all Meals can be made by credit or debit card through our Service. Once your order has been confirmed your credit or debit card will have been authorised and the amount marked for payment. Payment is made directly to Piccnicc and we subsequently pay the Restaurant the cost of the Meal When we make a delivery, we may at our sole discretion charge you a payment processing fee ("Piccnicc Fee") which will be notified to you before you complete your Order.</p>
              <br></br>
              <h4>10. OUR LIABILITY</h4>
              <p>To the extent permitted by law, Piccnicc provides our Service and content on an "as-is" and "as available" basis and we make no representation or warranty of any kind, express or implied, regarding the content or availability of our Service, or that it will be timely or error-free or that defects will be corrected. Subject as provided below, Piccnicc shall not have any liability to you for any direct, indirect, special or consequential losses or damages arising in contract, tort (including negligence) or otherwise arising from your use of or your inability to use our Service. In the event that Piccnicc or the Restaurant is found to be liable to you, Piccnicc’s total aggregate liability is limited to the purchase price of the Meals you have paid for in your order. This does not include or limit in any way Piccnicc's or any Partner Restaurant's liability for any matter for which it would be illegal for us or it to exclude, or attempt to exclude, our or its liability, including liability for death or personal injury caused by negligence or for fraud or fraudulent misrepresentation.</p>
              <br></br>
              <h4>11. EVENTS OUTSIDE OUR CONTROL</h4>
              <p>No party shall be liable to the other for any delay or non-performance of its obligations under this Agreement arising from any cause beyond its control including, without limitation, any of the following: act of God, governmental act, war, fire, flood, explosion or civil commotion. For the avoidance of doubt, nothing in clause 11 shall excuse the Customer from any payment obligations under this Agreement.</p>
              <br></br>
              
              <h4>12. SEVERABILITY</h4>
              <p>If any provision of this agreement is judged to be illegal or unenforceable, the continuation in full force and effect of the remainder of the provisions shall not be prejudiced.</p>
              <br></br>
              <h4>13. ENTIRE AGREEMENT</h4>
              <p>These terms contain the whole agreement between the parties relating to its subject matter and supersede all prior agreements, arrangements and understandings between the parties relating to that subject matter.</p>
              <br></br>
              <h4>14. OUR RIGHT TO VARY THESE TERMS AND CONDITIONS</h4>
              <p>Piccnicc may revise these terms of use at any time by amending this page. You are expected to check this page from time to time to take notice of any changes we make, as they are binding on you.</p>
              <br></br>
              <h4>15. LAW AND JURISDICTION</h4>
              <p>The English courts will have jurisdiction over any claim arising from, or related to, any use of our Services. These terms of use and any dispute or claim arising out of or in connection with them or their subject matter or formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the law of England and Wales.</p>

              <br></br>
              <br></br>
              <h3>PICCNICC TERMS OF USE FOR WEBSITE AND APPLICATIONS</h3>
              This page (together with the documents referred to on it) tells you the terms of use on which you may make use of our website piccnicc.com (our "Site") or any application we make available via an app store or otherwise (our "Service"), whether as a guest or a registered user. Please read these terms of use carefully before you start to use or Site or our Service. By accessing our Site or by using our Service, you indicate that you accept these terms of use and that you agree to abide by them. If you do not agree to these terms of use, do not use access our Site or use our Service.
              1. INFORMATION ABOUT US
              piccnicc.com is a website operated by Picnicc Limited ("we", "us" or "Piccnicc"), incorporated and registered in the England and Wales, whose registered office is at 31, King Street West, Manchester, M3 2PJ, United Kingdom. Our Company registration number is 09691739. Our VAT number is 221 2207 71. Piccnicc is a business where the food is prepared by independent restaurants (the "Restaurants") and delivered by us.
              Piccnicc is not affiliated to or otherwise commercially engaged with any of the Restaurants and we do not make any representation, nor intend to create any expectation or understanding to the contrary in respect of you or any Restaurant.
              2. ACCESSING OUR SERVICE OR OUR SERVICES
              Access to our Site and to our Service is permitted on a temporary basis, and we reserve the right to withdraw or amend access to our Site or our Service without notice (see below). We will not be liable if, for any reason, our Site or our Service is unavailable at any time or for any period. From time to time, we may restrict access to some parts our Site or our Service, or our entire Site or Service to users who have registered with us. You are responsible for maintaining the confidentially of your login details and any activities that occur under your account. If you have any concerns about your login details or think they have been misused, you should contact admin@piccnicc.com straight away to let us know. We can deactivate your account at any time.
              3. ACCEPTABLE USE
              You may use our Service only for lawful purposes. You may not use our Site or our Service in any way that breaches any applicable local, national or international law or regulation or to send, knowingly receive, upload, download, use or re-use any material which does not comply with our content standards in clause 5 below. You also agree not to access without authority, interfere with, damage or disrupt any part of our Site or our Service or any network or equipment used in the provision of our Service.
              4. INTERACTIVE FEATURES OF OUR SITE
              We may from time to time provide certain features which allow you to interact through our Site or our Service such as chat rooms. Generally, we do not moderate any interactive service we provide although we may remove content in contravention of these Terms of Use as set out in section 6. If we do decide to moderate an interactive service, we will make this clear before you use the service and normally provide you with a means of contacting the moderator, should a concern or difficulty arise.
              5. CONTENT STANDARDS
              These content standards apply to any and all material which you contribute to our Service (the "Contributions"), and to any interactive services associated with it. You must comply with the spirit of the following standards as well as the letter. The standards apply to each part of any Contributions as well as to its whole. Contributions must be accurate (where they state facts), be genuinely held (where they state opinions) and comply with applicable law in the UK and in any country from which they are posted. Contributions must not:
              contain any material which is defamatory of any person, obscene, offensive, hateful or inflammatory, promote sexually explicit material or promote violence or promote discrimination based on race, sex, religion, nationality, disability, sexual orientation or age;
              infringe any copyright, database right or trademark of any other person;
              be likely to deceive any person or be made in breach of any legal duty owed to a third party, such as a contractual duty or a duty of confidence or promote any illegal activity;
              be threatening, abuse or invade another's privacy, or cause annoyance, inconvenience or needless anxiety or be likely to harass, upset, embarrass, alarm or annoy any other person;
              be used to impersonate any person, or to misrepresent your identity or affiliation with any person or give the impression that they emanate from us, if this is not the case; or
              advocate, promote or assist any unlawful act such as (by way of example only) copyright infringement or computer misuse.
              6. SUSPENSION AND TERMINATION
              Failure to comply with section 3 (Acceptable Use) and/or 5 (Content Standards) in these Terms of Use constitutes a material breach of the Terms of Use, and may result in our taking all or any of the following actions:
              immediate, temporary or permanent withdrawal of your right to use our Service;
              immediate, temporary or permanent removal of any posting or material uploaded by you to our Service;
              issuing of a warning to you;
              legal action against you including proceedings for reimbursement of all costs on an (including, but not limited to, reasonable administrative and legal costs) resulting from the breach;
              disclosure of such information to law enforcement authorities as we reasonably feel is necessary.
              The responses described in this clause are not limited, and we may take any other action we reasonably deem appropriate.
              7. INTELLECTUAL PROPERTY RIGHTS
              We are the owner of or the licensee of all intellectual property rights in our Site and our Service, and in the material published on it (excluding your Contributions). Those works are protected by copyright laws and treaties around the world. All such rights are reserved. You may not copy, reproduce, republish, download, post, broadcast, transmit, make available to the public, or otherwise use any content on our site in any way except for your own personal, non-commercial use.
              8. RELIANCE ON INFORMATION POSTED
              Commentary and other materials posted on our Service are not intended to amount to advice on which reliance should be placed. We therefore disclaim all liability and responsibility arising from any reliance placed on such materials by any visitor to our Service, or by anyone who may be informed of any of its contents.
              9. OUR SITE AND OUR SERVICE CHANGE REGULARLY
              We aim to update our Site and our Service regularly, and may change the content at any time. If the need arises, we may suspend access to our Site and our Service, or close them indefinitely. Any of the material on our Site or our Service may be out of date at any given time, and we are under no obligation to update such material.
              10. OUR LIABILITY
              We have taken every care in the preparation of our Site and our Service. However, we will not be responsible for any errors or omissions in relation to such content or for any technical problems you may experience with our Site or our Service. If we are informed of any inaccuracies on our Site or in our Service we will attempt to correct this as soon as we reasonably can. To the extent permitted by law, we exclude all liability (whether arising in contract, in negligence or otherwise) for loss or damage which you or any third party may incur in connection with our Site, our Service, and any website linked to our Site and any materials posted on it. This does not affect our liability for death or personal injury arising from our negligence, or our liability for fraudulent misrepresentation or misrepresentation as to a fundamental matter, or any other liability which cannot be excluded or limited under applicable law.
              11. INFORMATION ABOUT YOU AND YOUR VISITS TO OUR SITE AND USE OF OUR SERVICE
              We collect certain data about you as a result of you using our Service. This is described in more detail in our privacy policy.
              12. UPLOADING MATERIAL TO OUR SITE AND OUR SERVICE
              Any material you upload to our Service or data that we collect as set out above (section 11) will be considered non-confidential and non-proprietary, and you acknowledge and agree that we have the right to use, copy, distribute, sell and disclose to third parties any such material or data for any purpose related to our business. To the extent that such material is protected by intellectual property rights, you grant us a perpetual, worldwide, royalty-free licence to use, copy, modify, distribute, sell and disclose to third parties any such material or data for any purpose related to our business.
              13. LINKS FROM OUR SITE
              Where our Site contains links to other sites and resources provided by third parties, these links are provided for your information only. We have no control over the contents of those sites or resources, and accept no responsibility for them or for any loss or damage that may arise from your use of them.
              14. JURISDICTION AND APPLICABLE LAW
              The English courts will have jurisdiction over any claim arising from, or related to, a visit to our Site or use of our Services. These terms of use and any dispute or claim arising out of or in connection with them or their subject matter or formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the law of England and Wales.
              15. VARIATIONS
              We may revise these terms of use at any time by amending this page. You are expected to check this page from time to time to take notice of any changes we make, as they are binding on you.
              16. YOUR CONCERNS
              If you have any concerns about material which appears on our Service, please contact admin@piccnicc.com


          </div>
        </div>
      </div>
    );
  }
});

module.exports = ExpoTerms;
