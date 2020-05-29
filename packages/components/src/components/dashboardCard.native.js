import React from 'react';
import { TouchableOpacity, Text, View, Image, Linking } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styles from './styles';

const Card = (props)=> {
	const { title='Inbox', icon='fa-envelope', text='Update your password and secure your account', url='http://localhost/camden/mr/dashboard/login_security' } = props;
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
		<View style={styles["row"], styles["cursor"], styles["mb_30"]}>
			<TouchableOpacity onPress={handleClick} >
				<View style={styles["pl-block"]}>
				<View style={[styles["card"], styles["mr_shadow"], styles["p_5"]]}>
					<View style={styles["card-body"]}>
						{/* <FontAwesomeIcon icon={['fa', 'envelope']} /> */}
						{/* <i className={`fa ${icon} fa-2x mb_10`}></i> */}
						<View style={styles["text_bold"], styles["text_secondary"], styles["mb_10"], styles["d-flex"], styles["align-items-center"]}>
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
