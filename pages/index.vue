<template>
    <NavBar />
    <div class="flex w-full mt-5 mb-5">
        <div class="grid w-1/4 h-20 flex-grow card bg-base-300 rounded-box place-items-center">Player Stats</div>
        <div class="divider divider-horizontal"></div>
        <div class="grid w-3/4 h-20 flex-grow card bg-base-300 rounded-box place-items-center">
            <div class="w-full p-4">
                <div class="tabs mb-0 pb-0">
                    <a class="tab tab-lifted">Actions</a>
                    <a class="tab tab-lifted">Skills</a>
                    <a class="tab tab-lifted tab-active">Shop</a>
                    <a class="tab tab-lifted">Inventory</a>
                </div>
                <div class="bg-base-100 mt-0 pt-0 rounded-md">
                    content
                </div>
            </div>

        </div>
    </div>

    <Footer />
</template>