import RNC from 'react-native-css';

export const style=`
   d-none {display: none;}
   container_fluid{max-width: 1241px ; margin:0 auto;}

   card{
    position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid rgba(0,0,0,.125);
        border-radius:25rem;
        box-sizing: border-box;
    }
   card-body{padding: 0 1.25rem ;}
   navbar{padding: .5rem 0;}
    button:focus {
        outline: 0px ;
        outline: 0px auto -webkit-focus-ring-color;
    }
    ml_10{
        margin-left: 10px;
    }
   mr_shadow {
        box-shadow: 0 0 5px 3px rgba(0,0,0,.05);
        border: 1px solid rgba(0, 0, 0, 0.06);
    }
    /* ----- Check Box white ------- */
   checkbox_white input[type="checkbox"] {visibility: hidden;}
   checkbox_white label {cursor: pointer;}
   checkbox_white input[type="checkbox"] + label:before {
    border: 1px solid #DADCE0;
    display: inline-block;
    font: 10px/1em sans-serif;
    width: 11px;
    height:11px;
    margin: 2px 5px 0 ;
    padding: 0;
    vertical-align: top;
    background-color: #fff;
    }
   checkbox_white input[type="checkbox"]:checked + label:before {
    background: #007bff;
    color: #333;
    content: "";
    text-align: center;
    }
   checkbox_white input[type="checkbox"]:checked + label:after {font-weight: bold;}

   checkbox_white input[type="checkbox"]:focus + label::before {outline: rgb(59, 153, 252) auto 5px;}

   modal-backdrop {opacity: 0.75;}

   img-fluid {max-width: 100%;height: auto;}

   pos_relative{position: relative ;}
   pos_absolute{position: absolute ;}
   align_center{
        align-items: center;
        ms-flex-align: center;
        justify-content: center;
        ms-flex-pack: center;

    }
   cursor{cursor: pointer;}
   max_width {max-width:  100%;}
   min_width {min-width:  100%;}
   max_height{max-height: 100%;}
   min_height{min-height: 100%;}
   h_10{height: 10px;}
   h_20{height: 20px;}
   h_30{height: 30px;}
   h_40{height: 40px;}
   h_50{height: 50px;}

   w_100p{width: 100%;}
   h_100p{height: 100%;}

   h_100vh{height: 100vh;}

   wraper_block{margin: 80px 0 ;}
   shadow {box-shadow: 05rem 1rem rgba(0,0,0,.15);}
   main_contaner{width: 100%; padding-right: 100px ; padding-left: 100px }
   modal_400 {max-width: 400px;}
   modal_600 {max-width: 600px;}
   modal_700 {max-width: 700px;}
   modal_900 {max-width: 900px;}

    /*flex setting start */
   d-flex {display: -webkit-box;display: -ms-flexbox; display: flex;}
   flex-wrap {-ms-flex-wrap: wrap;flex-wrap: wrap;}
   justify-content-center {-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;}
   align-items-center {-webkit-box-align: center;-ms-flex-align: center;align-items: center;}
   align-self-center {-ms-flex-item-align: center;align-self: center;}
    /*flex setting end */


   container{
            width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
   row {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }
   pl-block{
        padding-right: 15px;
    padding-left: 15px;
    }`;

const styles = RNC`${style}`;
export default styles;
