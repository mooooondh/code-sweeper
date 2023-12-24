// components
import Header from "./Header"
import MenuList from "./MenuList"
import Content from "./Content"

const About = () => {
	return (
		<div className="flex flex-1 flex-col h-screen bg-gray-800">
			<Header />
			<div className="flex flex-row h-full">
				<MenuList />
				<Content />
			</div>
		</div>
	)
}

export default About