// webpack-emcc.cpp : Defines the entry point for the application.

#include <stdio.h>
#include <stdlib.h>
#include <string>
#include <emscripten/html5.h>

void (*updateTimer)(int) = 0;
int lastTime = emscripten_get_now();

EM_BOOL loop(double time, void* userData)
{
    int currentTime = emscripten_get_now();
    updateTimer(currentTime - lastTime);
    lastTime = currentTime;

    return EM_TRUE;
}

extern "C"
{
    void registerFunctionPointer_updateTimer(char* id)
    {
        updateTimer = reinterpret_cast<void (*)(int)>(atoi(id));
        emscripten_request_animation_frame_loop(loop, 0);
    }
}

int main() {
    printf("Hello emscripten from C++\n");

    return 0;
}