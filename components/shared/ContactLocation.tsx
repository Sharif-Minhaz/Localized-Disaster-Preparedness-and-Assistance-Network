export default function ContactLocation() {
	return (
		<div className="rounded-xl shadow border">
			<iframe
				className="w-full h-full rounded-xl"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2100.2082903401383!2d90.31617457309957!3d23.870888264832743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c30030aded61%3A0x1c57c6001dfad076!2sAkran%20Bazar!5e1!3m2!1sen!2sbd!4v1710342372027!5m2!1sen!2sbd"
				style={{ border: 0 }}
				allowFullScreen={true}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				title="Our organization location"
			></iframe>
		</div>
	);
}
