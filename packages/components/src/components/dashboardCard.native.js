import React from 'react';
import { TouchableOpacity, Text, View, Image, Linking } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import RNC from 'react-native-css';
import { style } from './styles';

const Card = (props)=> {
	const { title='Inbox', icon='fa-envelope', text='Update your password and secure your account', url='http://localhost/camden/mr/dashboard/login_security' } = props;
	const styles = RNC`${style}`;
	const handleClick = () => {
        Linking.canOpenURL(url).then(supported => {
          if (supported) {
            Linking.openURL(url);
          } else {
            console.log("Don't know how to open URI: " + this.props.url);
          }
        });
      };
    return (
		<View style={styles["row", "cursor", "mb_30"]}>
			<TouchableOpacity onPress={handleClick} >
				<View style={styles["pl-block"]}>
				<View style={styles["card", "mr_shadow p_5"]}>
					<View style={styles["card-body"]}>
						{/* <FontAwesomeIcon icon={['fa', 'envelope']} /> */}
						{/* <i className={`fa ${icon} fa-2x mb_10`}></i> */}
						<View style={styles["text_bold", "text_secondary", "mb_10", "d-flex", "align-items-center"]}>
							<Text>{title}</Text>
							<Image source="https://propertyloop.co.uk/assets/images/pl-icons/right-arrow.svg" alt="right arrow" className="ml_10"/>
						</View>
						<Text style={styles["m_0"]} className="m_0">{text}</Text>
					</View>
				</View>
				</View>
			</TouchableOpacity>
		</View>);
}

export default Card;
