import React from 'react'
import LinkSocialCard from '../../components/LinkSocialCard/LinkSocialCard'

const Profile = () => {
    return (
        <div className='Profile'>
            {/* section 1 */}
            <div className="section-1 bg-[grey] h-screen px-6">
                <div className="grid grid-cols-2 h-full">
                    <div className="col-span-1 flex flex-col justify-center gap-10 h-full px-2 sm:px-10">
                        <h3 className='text-5xl'>Anusha Patil</h3>
                        <div className='text-[white] text-xl'>UX Designer</div>
                        <div className="badge-holder flex justify-start gap-5 items-center">
                            <div className="badge-holder__item bg-[white] flex justify-center rounded-full gap-2 w-auto min-w-[100px] p-2 items-center">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" className='w-[20px]' />
                                HTML
                            </div>
                            <div className="badge-holder__item bg-[white] flex justify-center rounded-full gap-2 w-auto min-w-[100px] p-2 items-center">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" className='w-[20px]' />
                                CSS
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 flex items-center justify-center">
                        <div className=' bg-[white] rounded-full'>
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className='rounded-full' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* section-2 */}
            <div className="section-2 min-h-screen p-5">

                <div className="flex flex-wrap justify-center items-center">
                    <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg"
                            className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4"
                            alt="github"
                        />
                        <input
                            id="github"
                            placeholder="github username"
                            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-1 sm:px-2 focus:border-blue-700"
                            defaultValue="anandd17"
                        />
                    </div>
                    <div className="w-1/2  flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg"
                            className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4"
                            alt="twitter"
                        />
                        <input
                            id="twitter"
                            placeholder="twitter username"
                            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                            defaultValue="anandd017"
                        />
                    </div>
                    <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/dev-dot-to.svg"
                            className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4"
                            alt="dev.to"
                        />
                        <input
                            id="dev"
                            placeholder="dev.to username"
                            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                            defaultValue="anandd17"
                        />
                    </div>
                    <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codepen.svg"
                            className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4"
                            alt="codepen"
                        />
                        <input
                            id="codepen"
                            placeholder="codepen username"
                            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                            defaultValue=""
                        />
                    </div>
                    <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/codesandbox.svg"
                            className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4"
                            alt="codesandbox"
                        />
                        <input
                            id="codesandbox"
                            placeholder="codesandbox username"
                            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                            defaultValue=""
                        />
                    </div>
                    <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/stackoverflow.svg"
                            className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4"
                            alt="stackoverflow"
                        />
                        <input
                            id="stackoverflow"
                            placeholder="stackoverflow user ID"
                            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                            defaultValue="anand doddamani"
                        />
                    </div>
                    <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
                            className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4"
                            alt="linkedin"
                        />
                        <input
                            id="linkedin"
                            placeholder="linkedin username"
                            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                            defaultValue="https://www.linkedin.com/in/anand-doddamani-b95896219/"
                        />
                    </div>
                    <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/kaggle.svg"
                            className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4"
                            alt="kaggle"
                        />
                        <input
                            id="kaggle"
                            placeholder="kaggle username"
                            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                            defaultValue=""
                        />
                    </div>
                    <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/facebook.svg"
                            className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4"
                            alt="facebook"
                        />
                        <input
                            id="fb"
                            placeholder="facebook username"
                            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                            defaultValue=""
                        />
                    </div>
                    <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg"
                            className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4"
                            alt="instagram"
                        />
                        <input
                            id="instagram"
                            placeholder="instagram username"
                            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                            defaultValue=""
                        />
                    </div>
                    <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/dribbble.svg"
                            className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4"
                            alt="dribbble"
                        />
                        <input
                            id="dribbble"
                            placeholder="dribbble username"
                            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                            defaultValue=""
                        />
                    </div>
                    <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/behance.svg"
                            className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4"
                            alt="behance"
                        />
                        <input
                            id="behance"
                            placeholder="behance username"
                            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                            defaultValue=""
                        />
                    </div>
                    <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/hashnode.svg"
                            className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4"
                            alt="hashnode"
                        />
                        <input
                            id="hashnode"
                            placeholder="hashnode username (with @)"
                            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                            defaultValue=""
                        />
                    </div>
                    <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/medium.svg"
                            className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4"
                            alt="medium"
                        />
                        <input
                            id="medium"
                            placeholder="medium username (with @)"
                            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                            defaultValue="@anandd17"
                        />
                    </div>
                    <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/youtube.svg"
                            className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4"
                            alt="youtube"
                        />
                        <input
                            id="youtube"
                            placeholder="youtube channel name"
                            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                            defaultValue=""
                        />
                    </div>
                    <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/codechef.svg"
                            className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4"
                            alt="codechef"
                        />
                        <input
                            id="codechef"
                            placeholder="codechef username"
                            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                            defaultValue="anand017"
                        />
                    </div>
                    <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/hackerrank.svg"
                            className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4"
                            alt="hackerrank"
                        />
                        <input
                            id="hackerrank"
                            placeholder="hackerrank username"
                            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                            defaultValue="01fe20bec102"
                        />
                    </div>
                    <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/codeforces.svg"
                            className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4"
                            alt="codeforces"
                        />
                        <input
                            id="codeforces"
                            placeholder="codeforces username"
                            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                            defaultValue=""
                        />
                    </div>
                    <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/leetcode.svg"
                            className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4"
                            alt="leetcode"
                        />
                        <input
                            id="leetcode"
                            placeholder="leetcode username"
                            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                            defaultValue="anandd17"
                        />
                    </div>
                    <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/topcoder.svg"
                            className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4"
                            alt="topcoder"
                        />
                        <input
                            id="topcoder"
                            placeholder="topcoder username"
                            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                            defaultValue=""
                        />
                    </div>
                    <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/hackerearth.svg"
                            className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4"
                            alt="hackerearth"
                        />
                        <input
                            id="hackerearth"
                            placeholder="hackerearth user (with @)"
                            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                            defaultValue=""
                        />
                    </div>
                    <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/geeksforgeeks.svg"
                            className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4"
                            alt="geeksforgeeks"
                        />
                        <input
                            id="geeksforgeeks"
                            placeholder="GFG (<username>/profile)"
                            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                            defaultValue=""
                        />
                    </div>
                    <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/discord.svg"
                            className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4"
                            alt="discord"
                        />
                        <input
                            id="discord"
                            placeholder="discord invite (only code)"
                            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                            defaultValue=""
                        />
                    </div>
                    <div className="w-1/2 flex justify-center items-center text-xxs sm:text-lg py-4 pr-2 sm:pr-0">
                        <img
                            src="https://cdn.jsdelivr.net/npm/simple-icons@3.1.0/icons/rss.svg"
                            className="w-6 h-6 sm:w-8 sm:h-8 mr-1 sm:mr-4"
                            alt="rssfeed"
                        />
                        <input
                            id="rssurl"
                            placeholder="RSS feed URL"
                            className="outline-none placeholder-gray-700 w-32 sm:w-1/2 border-t-0 border-l-0 border-r-0 border solid border-gray-900 py-1 px-2 focus:border-blue-700"
                            defaultValue=""
                        />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Profile