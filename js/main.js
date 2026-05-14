const allPostCard = document.getElementById('all-post-card')
async function fetchAllPost() {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await res.json();
    const persons = data.posts
    console.log(persons)
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
                                    <div
                                        class="rounded-full text-white cursor-pointer hover:bg-[#059669] transition-colors mt-5 md:mt-0">
                                        <img src="images/click.png" class="w-11" alt="">
                                        </svg>
                                    </div>
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