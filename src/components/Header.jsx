import chef from '@/images/chef.png';
export default function Header(props) {
    return (
        <header>
            <img src={chef} alt="Chef Logo" />
            <h1>Chef Claude</h1>
            <span>{props.loggedInUser}</span>
        </header>

        
    )
}