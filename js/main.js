const allPostCard = document.getElementById('all-post-card')
async function fetchAllPost() {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await res.json();
    const persons = data.posts
    persons.forEach(person => {
        const newDiv = document.createElement('div')
        newDiv.classList = `bg-[#f3f3f5] p-6 rounded-[32px] w-full  border border-gray-100 shadow-sm`;
        newDiv.innerHTML = `<div class="flex flex-col md:flex-row gap-6">
                            <!-- Profile Image Placeholder -->
                            <div class="relative flex-shrink-0">
                                <div class="w-16 h-16 bg-white rounded-2xl shadow-sm"><img src="${person.image}" class="rounded-2xl" alt=""></div>
                                <!-- Red Notification Dot -->
                                <div id="a${person.id}"
                                    class="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-[#f3f3f5]">
                                </div>
                            </div>

                            <!-- Content Area -->
                            <div class="flex-grow">
                                <!-- Header Info -->
                                <div class="flex gap-4 text-sm text-gray-600 mb-2">
                                    <span class="font-medium"># ${person.category}</span>
                                    <span>Author : ${person.author.name}</span>
                                </div>

                                <!-- Title -->
                                <h2 class="text-xl font-bold text-[#12132d] mb-3">
                                    ${person.title}
                                </h2>

                                <!-- Description -->
                                <p class="text-gray-500 leading-relaxed mb-5">
                                    ${person.description}
                                </p>

                                <!-- Dotted Divider -->
                                <div class="border-t border-dashed border-gray-300 mb-5"></div>

                                <!-- Footer Stats -->
                                <div class="flex flex-col md:flex-row items-center justify-between">
                                    <div class="flex items-center gap-6 text-gray-500">
                                        <!-- Comment Icon & Count -->
                                        <div class="flex items-center gap-2">
                                            <img src="images/replies.png" class="w-5 h-5" alt="">
                                            <span>${person.comment_count}</span>
                                        </div>

                                        <!-- View Icon & Count -->
                                        <div class="flex items-center gap-2">
                                            <img src="images/view.png" class="w-5 h-5" alt="">
                                            <span>${person.view_count}</span>
                                        </div>

                                        <!-- Time Icon & Duration -->
                                        <div class="flex items-center gap-2">
                                            <img src="images/clock.png" class="w-5 h-5" alt="">
                                            <span>${person.posted_time} min</span>
                                        </div>
                                    </div>

                                    <!-- Green Bookmark/Action Button -->
                                    <button
                                        class="rounded-full text-white cursor-pointer hover:bg-[#059669] transition-colors mt-5 md:mt-0">
                                        <img src="images/click.png" onclick="loadData('${person.description}','${person.view_count}')"
                                            class="w-11" alt="">

                                    </button>
                                </div>
                            </div>
                        </div>`

        allPostCard.append(newDiv)

        const active = document.getElementById(`a${person.id}`);
        if (person.isActive) {
            active.classList.add('bg-[#10B981]')
        } else {
            active.classList.add('bg-[#ff4d4d]')
        }
    });

}
fetchAllPost()

function loadData(desc, views) {
    const bookMark = document.getElementById('bookmark')
    const newDiv = document.createElement('div')
    newDiv.classList = `bg-white p-6 rounded-3xl flex justify-between items-center shadow-sm`;
    newDiv.innerHTML = `<h3 class="text-[#12132d] font-bold text-lg leading-snug max-w-[70%]">
                                    ${desc}
                                </h3>
                                <div class="flex items-center gap-2 text-gray-500">
                                    <img src="images/view.png" alt="">
                                    <span class="text-lg">${views}</span>
                                </div>`
    bookMark.append(newDiv);


}

async function fetchLatestPost() {
    const latestPost = document.getElementById('latest-post')
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    console.log(data)
    data.forEach(data => {
        const newDiv = document.createElement('div');
        newDiv.classList = `p-6 border border-gray-100 rounded-[32px] shadow-sm bg-white space-y-4`
        newDiv.innerHTML = `<div class="aspect-video bg-[#F3F3F3] rounded-2xl w-full">
    <img src="${data.cover_image}"
                                class="w-full h-full rounded-2xl" alt="">
                                </div>
                        <div class="flex items-center gap-2 text-gray-500 text-sm">
                            <img src="images/calender.png" alt="">
                            <span>${data.author?.posted_date || "No Publish Date"}</span >
                        </div >
                        <h3 class="text-xl font-extrabold text-[#12132D] leading-tight">
                            ${data.title}
                        </h3>
                        <p class="text-gray-500 text-sm leading-relaxed">
                            ${data.description}
                        </p>
                        <div class="flex items-center gap-3 pt-2">
                            <div class="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border border-gray-100">
                                <img src="${data.profile_image}" alt="">
                            </div>
                            <div>
                                <p class="font-bold text-[#12132D] text-sm">${data.author.name}</p>
                                <p class="text-gray-400 text-xs">${data.author?.designation || "Unknown"}</p>
                            </div>
                        </div>`
        latestPost.append(newDiv)
    });
}
fetchLatestPost()