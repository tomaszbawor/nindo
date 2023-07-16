<template>
    <NavBar />
    <div class="flex w-full mt-5 mb-5">
        <div class="w-1/4 flex-grow card bg-base-300 rounded-box place-items-center">
            <PlayerStats />
        </div>
        <div class="divider divider-horizontal"></div>
        <div class="grid w-3/4 flex-grow card bg-base-300 rounded-box place-items-center">
            <GameArea />
        </div>
    </div>

    <Footer />
</template>