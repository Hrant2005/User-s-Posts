function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const userContainer = document.getElementById('user-container');


        const shuffledUsers = shuffleArray(data.users.map(user => ({
            ...user,
            posts: shuffleArray(user.posts)
        })));


        shuffledUsers.forEach(user => {
            const userProfile = document.createElement('div');
            userProfile.classList.add('user-profile');


            const userInfo = `
                <img src="${user.profile_picture}" alt="${user.name}">
                <h2>${user.name}</h2>
            `;
            userProfile.innerHTML = userInfo;


            const postsContainer = document.createElement('div');
            postsContainer.classList.add('posts');


            user.posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');


                const postContent = `
                    <p class="title">${post.content}</p>
                    <img src="${post.image}" alt="Post Image" class="post_image">
                    <div class="post-details">
                        <span class="likes" data-post-id="${post.post_id}">${post.likes} Likes <svg fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 512 512" xml:space="preserve">
<g>
	<path d="M498.323,297.032c0-7.992-1.901-15.683-5.553-22.635c12.034-9.18,19.23-23.438,19.23-38.914
		c0-27.037-21.996-49.032-49.032-49.032H330.206c11.434-29.24,17.665-64.728,17.665-101.419c0-23.266-18.928-42.194-42.194-42.194
		s-42.193,18.928-42.193,42.194c0,83.161-58.012,145.389-144.355,154.844c-0.592,0.065-1.159,0.197-1.7,0.38
		C111.752,235.129,104.235,232,96,232H32c-17.645,0-32,14.355-32,32v152c0,17.645,14.355,32,32,32h64
		c9.763,0,18.513-4.4,24.388-11.315c20.473,2.987,33.744,9.534,46.568,15.882c16.484,8.158,33.53,16.595,63.496,16.595h191.484
		c27.037,0,49.032-21.996,49.032-49.032c0-7.991-1.901-15.683-5.553-22.635c12.034-9.18,19.23-23.438,19.23-38.914
		c0-7.991-1.901-15.683-5.553-22.635C491.126,326.766,498.323,312.507,498.323,297.032z M465.561,325.727H452c-4.418,0-8,3.582-8,8
		s3.582,8,8,8h11.958c3.061,5.1,4.687,10.847,4.687,16.854c0,12.106-6.56,23.096-17.163,28.919h-14.548c-4.418,0-8,3.582-8,8
		s3.582,8,8,8h13.481c2.973,5.044,4.553,10.71,4.553,16.629c0,18.214-14.818,33.032-33.032,33.032H230.452
		c-26.223,0-40.207-6.921-56.398-14.935c-12.358-6.117-26.235-12.961-46.56-16.594c0.326-1.83,0.506-3.71,0.506-5.632V295
		c0-4.418-3.582-8-8-8s-8,3.582-8,8v121c0,8.822-7.178,16-16,16H32c-8.822,0-16-7.178-16-16V264c0-8.822,7.178-16,16-16h64
		c8.822,0,16,7.178,16,16c0,4.418,3.582,8,8,8s8-3.582,8-8c0-3.105-0.453-6.105-1.282-8.947
		c44.778-6.106,82.817-25.325,110.284-55.813c27.395-30.408,42.481-70.967,42.481-114.208c0-14.443,11.75-26.194,26.193-26.194
		c14.443,0,26.194,11.75,26.194,26.194c0,39.305-7.464,76.964-21.018,106.04c-1.867,4.004-0.134,8.764,3.871,10.631
		c1.304,0.608,2.687,0.828,4.025,0.719c0.201,0.015,0.401,0.031,0.605,0.031h143.613c18.214,0,33.032,14.818,33.032,33.032
		c0,11.798-6.228,22.539-16.359,28.469h-14.975c-4.418,0-8,3.582-8,8s3.582,8,8,8h12.835c3.149,5.155,4.822,10.984,4.822,17.079
		C482.323,308.985,475.927,319.848,465.561,325.727z"/>
	<path d="M422.384,325.727h-8.525c-4.418,0-8,3.582-8,8s3.582,8,8,8h8.525c4.418,0,8-3.582,8-8S426.802,325.727,422.384,325.727z"/>
	<path d="M436.934,263.953h-8.525c-4.418,0-8,3.582-8,8s3.582,8,8,8h8.525c4.418,0,8-3.582,8-8S441.352,263.953,436.934,263.953z"/>
	<path d="M407.833,387.5h-8.525c-4.418,0-8,3.582-8,8s3.582,8,8,8h8.525c4.418,0,8-3.582,8-8S412.252,387.5,407.833,387.5z"/>
	<path d="M80,264c-8.822,0-16,7.178-16,16s7.178,16,16,16s16-7.178,16-16S88.822,264,80,264z"/>
</g>
</svg></span>
                        <span class="shares" data-post-id="${post.post_id}">${post.shares} Shares <svg fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 458.624 458.624" xml:space="preserve">
<g>
	<g>
		<path d="M339.588,314.529c-14.215,0-27.456,4.133-38.621,11.239l-112.682-78.67c1.809-6.315,2.798-12.976,2.798-19.871
			c0-6.896-0.989-13.557-2.798-19.871l109.64-76.547c11.764,8.356,26.133,13.286,41.662,13.286c39.79,0,72.047-32.257,72.047-72.047
			C411.634,32.258,379.378,0,339.588,0c-39.79,0-72.047,32.257-72.047,72.047c0,5.255,0.578,10.373,1.646,15.308l-112.424,78.491
			c-10.974-6.759-23.892-10.666-37.727-10.666c-39.79,0-72.047,32.257-72.047,72.047s32.256,72.047,72.047,72.047
			c13.834,0,26.753-3.907,37.727-10.666l113.292,79.097c-1.629,6.017-2.514,12.34-2.514,18.872c0,39.79,32.257,72.047,72.047,72.047
			c39.79,0,72.047-32.257,72.047-72.047C411.635,346.787,379.378,314.529,339.588,314.529z"/>
	</g>
</g>
</svg></span> 
                        <span>${post.comments.length} Comments <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 width="20px" height="20px" viewBox="0 0 485.87 485.869"
	 xml:space="preserve">
<g>
	<g>
		<path d="M41.766,378.467h260.393v107.402l99.884-107.402h42.061V0H41.766V378.467z M376.792,158.709
			c18.829,0,34.091,15.264,34.091,34.09c0,18.83-15.265,34.09-34.091,34.09s-34.091-15.264-34.091-34.09
			C342.703,173.971,357.964,158.709,376.792,158.709z M287.554,158.709c18.828,0,34.09,15.264,34.09,34.09
			c0,18.83-15.264,34.09-34.09,34.09c-18.829,0-34.093-15.264-34.093-34.09C253.461,173.971,268.725,158.709,287.554,158.709z
			 M198.314,158.709c18.829,0,34.091,15.264,34.091,34.09c0,18.83-15.264,34.09-34.091,34.09c-18.83,0-34.09-15.264-34.09-34.09
			C164.224,173.971,179.485,158.709,198.314,158.709z M109.074,158.709c18.83,0,34.092,15.264,34.092,34.09
			c0,18.83-15.265,34.09-34.092,34.09c-18.825,0-34.09-15.264-34.09-34.09C74.984,173.971,90.246,158.709,109.074,158.709z"/>
	</g>
</g>
</svg></span>
                    </div>
                    <div class="comments">
                        ${post.comments.map(comment => `<p><strong>${getUserName(comment.user_id, data.users)}:</strong> ${comment.text}</p>`).join('')}
                    </div>
                `;
                postElement.innerHTML = postContent;

                postsContainer.appendChild(postElement);
            });

            userProfile.appendChild(postsContainer);

            userContainer.appendChild(userProfile);
        });

        document.querySelectorAll('.likes').forEach(likeElement => {
            likeElement.addEventListener('click', function () {
                let countSpan = this.childNodes[0];
                let count = parseInt(countSpan.textContent);
                countSpan.textContent = `${count + 1} `;
                this.style.pointerEvents = 'none';
            });
        });

        document.querySelectorAll('.shares').forEach(shareElement => {
            shareElement.addEventListener('click', function () {
                let countSpan = this.childNodes[0];
                let count = parseInt(countSpan.textContent);
                countSpan.textContent = `${count + 1} `;
                this.style.pointerEvents = 'none';
            });
        });

    })
    .catch(error => console.error('Error loading JSON:', error));

function getUserName(id, users) {
    const user = users.find(user => user.id === id);
    return user ? user.name : 'Unknown';
}