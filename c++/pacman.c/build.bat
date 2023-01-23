SET SOURCE_DIR="../"
SET BUILD_DIR="./build"

@rem Run emcmdprompt.bat from a shortcut and run this batch from that console.
rmdir /s /q %BUILD_DIR%
mkdir %BUILD_DIR%
cd %BUILD_DIR%
emcmake cmake -G"MinGW Makefiles" -DCMAKE_BUILD_TYPE=MinSizeRel %SOURCE_DIR%
cmake --build .
pause
